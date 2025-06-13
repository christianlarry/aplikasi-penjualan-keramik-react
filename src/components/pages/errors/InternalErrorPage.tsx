import type { FallbackProps } from "react-error-boundary"

const InternalErrorPage = ({error}:FallbackProps) => {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-5xl font-semibold underline text-red-600">500 Internal Error</h1>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl">Oops! Something went wrong :(</h2>
            <p className="italic">Error: "{error.message}"</p>
            <p className="mt-4">Coba refresh halaman atau kembali ke halaman sebelumnya!</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default InternalErrorPage