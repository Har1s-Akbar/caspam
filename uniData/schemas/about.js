export default{
    name: "about",
    title: "About",
    type: "document",
    fields: [
        {
            name: 'name',
            title: "Name",
            type: 'string',
        },
        {
            name: 'description',
            title: "Description",
            type: 'string',
        },
        {
            name: 'image',
            title: "Image",
            type: 'image',
        },
        {
            name: 'links',
            title: "Links",
            type: 'array',
            of:[
                {type: 'string'}
            ],
        },
    ]
}