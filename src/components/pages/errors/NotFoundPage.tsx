import { Link } from "react-router"
import Button from "../../UI/atoms/button/Button"

const NotFoundPage = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-5xl font-semibold underline text-red-600">404 Error</h1>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl">Oops! Halaman Tidak Ditemukkan :(</h2>
            <div className="flex">
              <Link to={"/"}>
                <Button variant="text"><span className="text-base underline">Kembali ke beranda</span></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage