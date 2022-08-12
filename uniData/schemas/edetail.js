export default{
    name: "edetail",
    title: "Edetail",
    type: "document",
    fields: [
        {
            name: 'title',
            title: "Title",
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
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