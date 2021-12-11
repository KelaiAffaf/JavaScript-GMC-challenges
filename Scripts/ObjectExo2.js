const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {😩
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
// signUp function 
function signUp(users, user) {
    // check if the user already exists
    const userExists = users.find(u => u.email === user.email);
    if (userExists) {
        return {
            success: false,
            message: 'User already exists'
        }
    }
    // if user doesn't exist, add new user
    const newUser = {
        _id: Math.random().toString(36).substr(2, 9),
        username: user.username,
        email: user.email,
        password: user.password,
        createdAt: new Date().toLocaleString()
    }
    users.push(newUser);
    return {
        success: true,
        user: newUser
    }
}
// signIn function
function signIn(users, user) {
    // check if the user exists
    const userExists = users.find(u => u.email === user.email);
    if (!userExists) {
        return {
            success: false,
            message: 'User does not exist'
        }
    }
    // if user exists, check if password is correct
    if (userExists.password === user.password) {
        return {
            success: true,
            user: userExists
            message: 'User logged in'
        }
    }
    return {
        success: false,
        message: 'Password is incorrect'
    }
}
// rateProduct 
function rateProduct(products, productId, userId, rate) {
    // check if the product exists
    const productExists = products.find(p => p._id === productId);
    if (!productExists) {
        return {
            success: false,
            message: 'Product does not exist'
        }
    }
    // check if the user exists
    const userExists = users.find(u => u._id === userId);
    if (!userExists) {
        return {
            success: false,
            message: 'User does not exist'
        }
    }
    // if user and product exists, add the rating
    productExists.ratings.push({ userId: userId, rate: rate });
    return {
        success: true,
        message: 'Rating added'
    }
}
// likeProduct
function likeProduct(products, productId, userId) {
    // check if the product exists
    const productExists = products.find(p => p._id === productId);
    if (!productExists) {
        return {
            success: false,
            message: 'Product does not exist'
        }
    }
    // check if the user exists
    const userExists = users.find(u => u._id === userId);
    if (!userExists) {
        return {
            success: false,
            message: 'User does not exist'
        }
    }
    // if user and product exists, add the like
    productExists.likes.push(userId);
    return {
        success: true,
        message: 'Product liked'
    }
}
// getProducts
function getProducts(products) {
    return {
        success: true,
        products: products
    }
}
// getProduct
function getProduct(products, productId) {
    // check if the product exists
    const productExists = products.find(p => p._id === productId);
    if (!productExists) {
        return {
            success: false,
            message: 'Product does not exist'
        }
    }
    return {
        success: true,
        product: productExists
    }
}
// getUsers
function getUsers(users) {
    return {
        success: true,
        users: users
    }
}
// getUser
function getUser(users, userId) {
    // check if the user exists
    const userExists = users.find(u => u._id === userId);
    if (!userExists) {
        return {
            success: false,
            message: 'User does not exist'
        }
    }
    return {
        success: true,
        user: userExists
    }
}
// getUserRatings
function getUserRatings(users, userId) {
    // check if the user exists
    const userExists = users.find(u => u._id === userId);
    if (!userExists) {
        return {
            success: false,
            message: 'User does not exist'
        }
    }
    return {
        success: true,
        ratings: userExists.ratings
    }
}
// getUserLikes
function getUserLikes(users, userId) {
    // check if the user exists
    const userExists = users.find(u => u._id === userId);
    if (!userExists) {
        return {
            success: false,
            message: 'User does not exist'
        }
    }
    return {
        success: true,
        likes: userExists.likes
    }
}
// avergeRating
function averageRating(products, productId) {
    // check if the product exists
    const productExists = products.find(p => p._id === productId);
    if (!productExists) {
        return {
            success: false,
            message: 'Product does not exist'
        }
    }
    let sum = 0;
    let count = 0;
    productExists.ratings.forEach(r => {
        sum += r.rate;
        count++;
    });
    return {
        success: true,
        average: sum / count
    }
}

