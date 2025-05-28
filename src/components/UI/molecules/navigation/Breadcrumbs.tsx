import { Link } from "react-router"
import Button from "../../atoms/button/Button"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { Fragment } from "react/jsx-runtime"

export interface BreadcrumbsItem {
  label: string,
  url: string
}

interface Props {
  items: BreadcrumbsItem[]
}

const Breadcrumbs = ({
  items
}: Props) => {
  return (
    <nav>
      <div className="hidden sm:block">
        <ul className="items-center gap-1 flex-wrap flex">
          {items.map((item, idx, arr) => (
            <Fragment key={idx}>
              {idx !== arr.length - 1 &&
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
              {idx === arr.length - 1 &&
                <li>
                  <Button variant="text" className="block text-base! font-semibold pointer-events-none">{item.label}</Button>
                </li>
              }
            </Fragment>
          ))}
        </ul>
      </div>
      
      <div className="block sm:hidden">
        {items[items.length-2] && 
          <Link to={items[items.length-2].url} className="flex items-center">
            <span className="text-base"><LuChevronLeft /></span>
            <Button variant="text" className="block text-base!">{items[items.length-2].label}</Button>
          </Link>
        }
        {!items[items.length-2] &&
          <Button variant="text" className="block text-base! font-semibold pointer-events-none">{items[0].label}</Button>
        }
      </div>

    </nav>
  )
}

export default Breadcrumbs