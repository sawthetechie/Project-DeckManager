export default function Container(props){
    const {children, className} = props;
    return (
        <>
            <div className={className}>
                {children}
            </div>
        </>
    )
}