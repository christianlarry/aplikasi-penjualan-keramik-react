import React, { useRef, useState, useEffect } from "react";

interface Point {
  x: number;
  y: number;
}

interface Line {
  start: Point;
  end: Point;
  length: number;
}

interface RoomCanvasProps {
  tileWidth: number; // cm
  tileHeight: number; // cm
}

const gridSize = 10; // 1 grid = 1cm (10px per cm)

const RoomCanvas: React.FC<RoomCanvasProps> = ({ tileWidth, tileHeight }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [undoStack, setUndoStack] = useState<Line[][]>([]);
  const [redoStack, setRedoStack] = useState<Line[][]>([]);
  const [startPoint, setStartPoint] = useState<Point | null>(null);
  const [area, setArea] = useState<number>(0);
  const [mousePos, setMousePos] = useState<Point | null>(null);
  const isPolygonClosed = lines.length >= 3 && lines[0].start.x === lines[lines.length - 1].end.x && lines[0].start.y === lines[lines.length - 1].end.y;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = 800;
        canvas.height = 600;
        draw(ctx);
      }
    }
  }, [lines, mousePos]);

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw grid
    ctx.strokeStyle = "#eee";
    for (let x = 0; x < ctx.canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ctx.canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < ctx.canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(ctx.canvas.width, y);
      ctx.stroke();
    }

    // Draw existing lines with labels
    ctx.strokeStyle = "black";
    ctx.fillStyle = "blue";
    ctx.font = "12px Arial";

    lines.forEach((line) => {
      ctx.beginPath();
      ctx.moveTo(line.start.x, line.start.y);
      ctx.lineTo(line.end.x, line.end.y);
      ctx.stroke();

      const midX = (line.start.x + line.end.x) / 2;
      const midY = (line.start.y + line.end.y) / 2;
      ctx.fillText(`${line.length.toFixed(2)} cm`, midX + 5, midY - 5);
    });

    // Draw preview line if drawing is in progress
    if (startPoint && mousePos && !isPolygonClosed) {
      ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
      ctx.beginPath();
      ctx.moveTo(startPoint.x, startPoint.y);
      ctx.lineTo(mousePos.x, mousePos.y);
      ctx.stroke();
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isPolygonClosed) return; // prevent drawing if polygon is closed

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left) / gridSize) * gridSize;
    const y = Math.round((e.clientY - rect.top) / gridSize) * gridSize;

    if (!startPoint) {
      setStartPoint({ x, y });
    } else {
      let endX = x;
      let endY = y;
      const dx = Math.abs(endX - startPoint.x);
      const dy = Math.abs(endY - startPoint.y);

      if (dx > dy) endY = startPoint.y;
      else endX = startPoint.x;

      const length = Math.sqrt(
        Math.pow(endX - startPoint.x, 2) + Math.pow(endY - startPoint.y, 2)
      ) / gridSize;

      const newLine: Line = {
        start: startPoint,
        end: { x: endX, y: endY },
        length,
      };

      const newLines = [...lines, newLine];
      setUndoStack([...undoStack, lines]);
      setRedoStack([]);
      setLines(newLines);

      const first = newLines[0].start;
      const last = newLines[newLines.length - 1].end;
      if (newLines.length >= 3 && first.x === last.x && first.y === last.y) {
        const polygonPoints = newLines.map((line) => line.start);
        const polygonArea = calculateArea(polygonPoints);
        setArea(polygonArea);
        setStartPoint(null);
        setMousePos(null);
        return;
      }

      setStartPoint({ x: endX, y: endY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!startPoint || isPolygonClosed) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left) / gridSize) * gridSize;
    const y = Math.round((e.clientY - rect.top) / gridSize) * gridSize;
    setMousePos({ x, y });
  };

  const calculateArea = (points: Point[]): number => {
    let area = 0;
    const n = points.length;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      area += points[i].x * points[j].y;
      area -= points[j].x * points[i].y;
    }
    return Math.abs(area / 2) / (gridSize * gridSize);
  };

  const handleUndo = () => {
    if (undoStack.length === 0) return;
    const prevLines = undoStack[undoStack.length - 1];
    setRedoStack([lines, ...redoStack]);
    setLines(prevLines);
    setUndoStack(undoStack.slice(0, -1));
    setArea(0);
    setStartPoint(prevLines.length > 0 ? prevLines[prevLines.length - 1].end : null);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const nextLines = redoStack[0];
    setUndoStack([...undoStack, lines]);
    setLines(nextLines);
    setRedoStack(redoStack.slice(1));
    setStartPoint(nextLines.length > 0 ? nextLines[nextLines.length - 1].end : null);
  };

  const totalTiles = area > 0 ? Math.ceil(area / (tileWidth * tileHeight)) : 0;

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ border: "1px solid black", cursor: "crosshair" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      />
      <div className="mt-4">
        <button onClick={handleUndo} style={{ marginRight: "10px" }}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
        <p>Luas ruangan: {area.toFixed(2)} cm²</p>
        <p>Jumlah ubin: {totalTiles} ubin (dengan ukuran {tileWidth}x{tileHeight} cm)</p>
      </div>
    </div>
  );
};

export default RoomCanvas;