export const userSchema = {
    name: 'users',
    type: 'document',
    title: 'Users',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Wallet Address',
        },
        {
            name: 'walletAddress',
            type: 'string',
            title: 'Wallet Address',
        },
        {
            name: 'profileImage',
            type: 'image',
            title: 'Profile Image',
        },
    ],
}