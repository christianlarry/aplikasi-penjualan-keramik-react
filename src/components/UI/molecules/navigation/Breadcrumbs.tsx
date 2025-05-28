import { Link } from "react-router"
import Button from "../../atoms/button/Button"
import { LuChevronRight } from "react-icons/lu"
import { Fragment } from "react/jsx-runtime"

export interface BreadcrumbsItem{
  label:string,
  url:string
}

interface Props{
  items:BreadcrumbsItem[]
}

const Breadcrumbs = ({
  items
}:Props) => {
  return (
    <nav>
      <ul className="flex items-center gap-1 flex-wrap">
        {items.map((item,idx,arr)=>(
          <Fragment key={idx}>
            {idx !== arr.length-1 &&
            <>
              <li>
                <Link to={item.url}>
                  <Button variant="text" className="block text-base!">{item.label}</Button>
                </Link>
              </li>
              <li>
                <span className="text-base"><LuChevronRight /></span>
              </li>
            </>
            } 
            {idx === arr.length-1 &&
              <li>
                <Button variant="text" className="block text-base! font-semibold pointer-events-none">{item.label}</Button>
              </li>
            }
          </Fragment>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumbs