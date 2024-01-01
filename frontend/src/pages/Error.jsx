import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section className='error-page' >
        <dir>
            <ExclamationTriangleIcon className="icon" />
            <p className="err-message">You have Error Solve it!!!</p>
            <Link to={"/"}>
                <p className="btn err-btn">Go Back where you're belong</p>
            </Link>
        </dir>
    </section>
  )
}

export default Error