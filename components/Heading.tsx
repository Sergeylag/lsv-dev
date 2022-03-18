type datatype = {
    tag: any,
    text: string
}

const Heading = (props: datatype) => {
    const {tag, text} = props
    const Tag = tag ? tag : 'h1'
    return <Tag>{text}</Tag>
};

export default Heading;