import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from "react-icons/lu"
import Button from "../../atoms/button/Button"

interface Props{
  onPageChange: (page:number)=>void
  totalPages:number
  currentPage:number
  maxPageToShow?:number
}

const Pagination = ({
  currentPage,
  onPageChange,
  totalPages,
  maxPageToShow=5
}:Props)=>{

  const midPage:number = Math.ceil(maxPageToShow/2)

  const getPaginationNumber = ():number[]=>{

    const pages:number[] = []

    // Jika totalpages masih dibawah maxpage
    if(totalPages <= maxPageToShow){

      for(let i=1;i<=totalPages;i++){
        pages.push(i)
      }

    }else if(currentPage <= midPage){

      for(let i=1;i<=maxPageToShow;i++){
        pages.push(i)
      }

    }else{

      for(let i=1;i<=maxPageToShow;i++){
        const index = currentPage-(midPage-i)

        if(index == totalPages){
          pages.length = 0
          
          for(let j=1;j<=maxPageToShow;j++){
            const index = totalPages-maxPageToShow+j
            pages.push(index)
          }
          
          break
        }

        pages.push(index)
      }

    }

    return pages
  }

  return (
    <div className="flex justify-center gap-1 items-center flex-wrap">
      {/* First page button */}
      <div className="flex justify-center items-center gap-1">
        <Button 
          variant="pagination"
          disabled={currentPage === 1}
          onClick={()=>onPageChange(1)}
        >
          <LuChevronsLeft/>
        </Button>

        {/* Prev page button */}
        <Button
          variant="pagination"
          disabled={currentPage === 1}
          onClick={()=>onPageChange(currentPage-1)}
        >
          <LuChevronLeft/>
        </Button>
      </div>

      {/* MAIN PAGINATION */}
      <div className="flex items-center justify-center flex-wrap gap-1">
      {getPaginationNumber().map(page=>(
        <Button
        key={"page-"+page}
        variant="pagination"
        active={page===currentPage}
        disabled={page===currentPage}
        onClick={()=>onPageChange(page)}
        aria-label={`Page ${page}`}
        aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </Button>
      ))}
      </div>

      {/* Next page button */}
      <div className="flex justify-center items-center gap-1">
        <Button
          variant="pagination"
          disabled={currentPage === totalPages}
          onClick={()=>onPageChange(currentPage+1)}
        >
          <LuChevronRight/>
        </Button>

        {/* Last page button */}
        <Button
          variant="pagination"
          disabled={currentPage === totalPages}
          onClick={()=>onPageChange(totalPages)}
        >
          <LuChevronsRight/>
        </Button>
      </div>
    </div>
  )
}

export default Pagination