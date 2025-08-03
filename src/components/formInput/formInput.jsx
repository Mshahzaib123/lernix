const FormInput = (props) => {
    return (
        <input type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            required={true}
            className={`w-full h-14 border-none outline-none bg-grey100 rounded p-5 text-base leading-normal font-medium text-greyShade ${props.className}`} />
    )
}

export default FormInput
