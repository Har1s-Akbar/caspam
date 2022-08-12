export default{
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: 'title',
            title: "Title",
            type: 'string',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'image'
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
            type: 'image',
            options: {
                hotspot: true
              },
        }
    ]
}