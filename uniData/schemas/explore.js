export default{
    name: "explore",
    title: "explore",
    type: "document",
    fields: [
        {
            name: 'title',
            title: "Title",
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of:[
                {type: 'string'}
            ]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of:[
                {type: 'image'}
            ]
        },
    ]
}