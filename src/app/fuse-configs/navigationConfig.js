const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'example-component',
                'title': 'Example',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/example'
            },
            {
                'id'   : 'welcome-component',
                'title': 'Welcome Page',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/welcome'
            }
        ]
    }
];

export default navigationConfig;
