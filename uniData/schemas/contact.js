export default{
    name: "contact",
    title: "Contact",
    type: "document",
    fields: [
        {
            name: 'title',
            title: "Title",
            type: 'string',
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of:[
                {type: 'string'},
            ]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [
                {type: 'image'}
            ]
        }
    ]
}