/**
 * @swagger
 * /api/1/tests/user:
 *  post:
 *      summary: Get user's tests
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userId:
 *                              type: integer
 *      responses:
 *          200:
 *              description: get tests
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                              status:
 *                                  type: boolean
 *                              score:
 *                                  type: integer
 *                              UserId:
 *                                  type: integer
 *                              Test:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: integer
 *                                      category:
 *                                          type: string
 *                                      name:
 *                                          type: string
 *                                      time:
 *                                          type: integer
 *                                      role:
 *                                          type: string
 *                                      difficulty:
 *                                          type: string
 *                                      link:
 *                                          type: string
 *                                      logo:
 *                                          type: string
 *
 * /api/1/tests:
 *  get:
 *      summary: get tests
 *      responses:
 *          200:
 *              description: tests
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                              category:
 *                                  type: string
 *                              name:
 *                                  type: string
 *                              time:
 *                                  type: integer
 *                              role:
 *                                  type: string
 *                              difficulty:
 *                                  type: string
 *                              link:
 *                                  type: string
 *                              logo:
 *                                  type: string
 */
