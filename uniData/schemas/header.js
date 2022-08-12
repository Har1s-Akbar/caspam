export default{
    name : 'header',
    title: 'Header',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'array',
            of: [
                {type: 'string'}
            ],
        },
        {
            name:'image',
            title:'Image',
            type:'array',
            of:[
                {type : 'image', options:{
                    hotspot: true
                },},
            ],
        },
    ],
}