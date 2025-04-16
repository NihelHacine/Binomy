const {check, validationResult} = require("express-validator");

exports.registerRules = () => 
    [
    check ('nom', 'nom is required').notEmpty(),
    check ('prenom', 'prenom is required').notEmpty(),
    check ('cin', 'cin is required').notEmpty(),
    check ('cin', 'cin must be 8 numbers').isLength(
        {
            min : 8 , 
            max : 8,
        }
    ),
    check ('tel', 'tel is required').notEmpty(),
    check ('tel', 'tel  must be 8 numbers').isLength(
        {
            min : 8 , 
            max : 8,
        }
    ),
    check ('email', 'email is required').notEmpty(),
    check ('email', 'check your email again').isEmail(),
    check ('password', 'password must be 6 to 20 characters').isLength(
        {
            min : 6 , 
            max : 20,
        }
    ),
    check ('gouvernorat', 'gouvernorat is required').notEmpty(),
    check ('adresse', 'adresse is required').notEmpty(),
    check ('code_postal', 'code_postal is required').notEmpty(),
    check ('code_postal', 'code_postal must be 4 numbers').isLength(
        {
            min : 4 , 
            max : 4,
        }
    ),
    check ('about', 'about is required').notEmpty(),
    check ('role', 'role is required').notEmpty(),
    ]
;

exports.loginRules = () => 
    [
        check ('email', 'email is required').notEmpty(),
        check ('email', 'check your email again').isEmail(),
        check ('password', 'password must be 6 to 20 characters').isLength(
            {
                min : 6 , 
                max : 20,
            }
    ), 
    ];

 exports.validation = (req,res,next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).send({errors: errors.array().map((el)=>({msg:el.msg}))});   
    };
    next();
}

