Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'nova-shortcodes',
            path: '/nova-shortcodes',
            component: require('./components/Tool'),
        },
    ])
})
