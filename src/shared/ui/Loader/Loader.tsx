import  "./Loader.scss";

interface LoaderProps{
  className?: string
}

const Loader = ({className}:LoaderProps) => {
  return (
    <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  )
}

export default Loader