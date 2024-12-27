export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options: {
                source: 'title',
            },
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                },
            ],
        },
        {
            name: 'comments',
            type: 'array',
            title: 'Comments',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Name',
                        },
                        {
                            name: 'comment',
                            type: 'text',
                            title: 'Comment',
                        },
                        {
                            name: 'approved',
                            type: 'boolean',
                            title: 'Approved',
                            description: 'Comments won\'t show on the site without approval',
                        },
                    ],
                },
            ],
        },
    ],
};
