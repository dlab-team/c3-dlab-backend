const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/userControllers");
const profileControllers = require("../controllers/profileControllers");
const validator = require("../controllers/validator");

const { signUp, signIn, currentUser, signOut } = userControllers;
const { addProfile, getUser } = profileControllers;

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              email:
 *                  type: string
 *                  description: user email
 *              password:
 *                  type: password
 *                  description: user password
 *          required:
 *              email:
 *              password:
 *          example:
 *              email: user@mail.com
 *              password: 12345678
 */

/**
 * @swagger
 * /api/1/users/signup:
 *  post:
 *      summary: Creates a new user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#components/schemas/User'
 *      responses:
 *          201:
 *              description: new user created
 *              content:
 *                  applicaction/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                              email:
 *                                  type: string
 *          400:
 *              description: bad request
 *
 * /api/1/users/signin:
 *  post:
 *      summary: User authentication
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#components/schemas/User'
 *      responses:
 *          200:
 *              description: user authenticated
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                              email:
 *                                  type: string
 *          400:
 *              description: Bad request
 *
 * /api/users/1/signout:
 *  post:
 *      summary: User signout
 *
 * /api/users/1/currentuser:
 *  get:
 *      summary: check for cookie session
 */
router.route("/users/signup").post(validator, signUp);
router.route("/users/signin").post(validator, signIn);
router.route("/users/signout").post(signOut);
router.route("/users/currentuser").get(currentUser);
router.route("/users/profile").post(addProfile);
router.route("/users/get").post(getUser);

module.exports = router;
