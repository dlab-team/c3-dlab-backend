/**
 * @swagger
 * components:
 *  schemas:
 *      FormData:
 *          type: object
 *          properties:
 *              edLevels:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          name:
 *                              type: string
 *              frameworks:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          name:
 *                              type: string
 *              languages:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          name:
 *                              type: string
 *              tools:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          name:
 *                              type: string
 *              professionalPositions:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          name:
 *                              type: string
 *              jobs:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          name:
 *                              type: string
 *              softSkills:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          name:
 *                              type: string
 *              visas:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          name:
 *                              type: string
 * @swagger
 * /api/1/profile/form:
 *  get:
 *      summary: Get form data
 *      responses:
 *          200:
 *              description: succes
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              edLevels:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                          name:
 *                                              type: string
 *                              frameworks:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                          name:
 *                                              type: string
 *                              languages:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                          name:
 *                                              type: string
 *                              tools:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                          name:
 *                                              type: string
 *                              professionalPositions:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                          name:
 *                                              type: string
 *                              jobs:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                          name:
 *                                              type: string
 *                              softSkills:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                          name:
 *                                              type: string
 *                              visas:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                          name:
 *                                              type: string
 *          400:
 *              description: bad request
 */
