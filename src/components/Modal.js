import { forwardRef } from "react"
import "./Modal.css"
import { FaTag } from "react-icons/fa";

const Modal = forwardRef(({title, description, tags, links, image, hideModal}, ref) => {
    return (
        <div className="modal" ref={ref}>
            <div className="modal--imageContainer">
                <img className="modal--image" src={image} alt="img" />
            </div>
            <div className="modal--content">
                <h2 className="modal--title">{title}</h2>
                <p className="modal--description">{description}</p>
                <span className="modal--tags"><FaTag /><span>{tags}</span></span>
            </div>
            <div className="modal--footer">
                <div className="modal--links">
                    { links?.map((link, index) => (
                    <div key={`link${index}`}>
                        <a className="modal--link" href={ link.href }>{ link.title }</a>
                        { index !== links.length - 1 && <span style={{color: 'white'}}>|</span> }
                    </div>))}
                </div>
                <p className="modal--link" onClick={ hideModal }>Close</p>
            </div>
        </div>
    )
})

export default Modal