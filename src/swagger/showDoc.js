/**
 * @swagger
 * /api/1/showthecode/user:
 *  post:
 *      summary: Get show the code events related with the user
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
 *              description: get show the code events
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                              status:
 *                                  type: boolean
 *                              notes:
 *                                  type: string
 *                              UserId:
 *                                  type: integer
 *                              createdAt:
 *                                  type: string
 *                                  format: date-time
 *                              updatedAt:
 *                                  type: string
 *                                  format: date-time
 *                              ShowTheCode:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: integer
 *                                      date:
 *                                          type: string
 *                                          format: date-time
 *                                      company:
 *                                          type: string
 *                                      type:
 *                                          type: string
 *                                      link:
 *                                          type: string
 *                                      createdAt:
 *                                          type: string
 *                                          format: date-time
 *                                      updatedAt:
 *                                          type: string
 *                                          format: date-time
 *
 * /api/1/showthecode:
 *  get:
 *      summary: get all show the code events
 *      responses:
 *          200:
 *              description: get all show the code events
 *              content:
 *                  applicaction/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                              date:
 *                                  type: string
 *                                  format: date-time
 *                              company:
 *                                  type: string
 *                              type:
 *                                  type: string
 *                              link:
 *                                  type: string
 *                              createdAt:
 *                                  type: string
 *                                  format: date-time
 *                              updatedAt:
 *                                  type: string
 *                                  format: date-time
 *
 */
