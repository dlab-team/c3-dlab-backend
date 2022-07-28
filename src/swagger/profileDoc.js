/**
 * @swagger
 * components:
 *  schemas:
 *      Profile:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: first name
 *              lastName:
 *                  type:string
 *              phone:
 *                  type: string
 *              city:
 *                  type: string
 *              country:
 *                  type: string
 *              gender:
 *                  type: string
 *              employmentStatus:
 *                  type: string
 *              idealJob:
 *                  type: string
 *              educationLevelId:
 *                  type: integer
 *              urlCv:
 *                  type: string
 *              urlLinkedin:
 *                  type: string
 *              urlGithub:
 *                  type: string
 *              urlPortfolio:
 *                  type: string
 *              details:
 *                  type
 *              yearsExperience:
 *                  type: integer
 *              studies:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          UserId:
 *                              type: integer
 *                          institution:
 *                              type: string
 *                          institutionType:
 *                              type: string
 *              positions:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          UserId:
 *                              type: integer
 *                          ProfessionalPositionId:
 *                              type: integer
 *              languages:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          UserId:
 *                              type: integer
 *                          LanguageId:
 *                              type: integer
 *                          level:
 *                              type: integer
 *              frameworks:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          UserId:
 *                              type: integer
 *                          FrameworkId:
 *                              type: integer
 *                          level:
 *                              type: integer
 *              tools:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          UserId:
 *                              type: integer
 *                          ToolId:
 *                              type: integer
 *                          level:
 *                              type: integer
 *          example:
 *              userId: 1
 *              name: Max
 *              lastName: Power
 *              phone: 123456789
 *              city: Santiago
 *              country: Chile
 *              gender: Masculino
 *              employmentStatus: Cesante, busco empleo en TI por primera vez
 *              idealJob: No trabajar
 *              educationLevelId: 3
 *              urlCv: www.urlcv.com
 *              urlLinkedin: www.linkedin.com/in/max
 *              urlGithub: www.github.com/devmax
 *              urlPortfolio: www.power.com
 *              details: me enorgullece mi proyecto de seguir existiendo
 *              yearsExperience: 0
 *              studies: [{UserId: 1, name: Fullstack Mern, institution: Desafio Latam, institutionType: Bootcamp}]
 *              positions: [{UserId: 1, ProfessionalPositionId: 1}]
 *              languages: [{UserId: 1, LanguageId: 1, level: 1}]
 *              frameworks: [{UserId: 1, FrameworkId: 1, level: 1}]
 *              tools: [{UserId: 1, FrameworkId: 1, level: 1}]
 * @swagger
 * /api/v1/users/profile:
 *  post:
 *      summary: Creates the user`s profile
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#components/schemas/Profile'
 *      responses:
 *          201:
 *              description: profile created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              userId:
 *                                  type: integer
 *                              name:
 *                                  type: string
 *                              lastName:
 *                                  type: string
 *                              phone:
 *                                  type: string
 *                              city:
 *                                  type: string
 *                              country:
 *                                  type: string
 *                              gender:
 *                                  type: string
 *                              employmentStatus:
 *                                  type: string
 *                              idealJob:
 *                                  type: string
 *                              educationLevelId:
 *                                  type: integer
 *                              urlCv:
 *                                  type: string
 *                              urlLinkedin:
 *                                  type: string
 *                              urlGithub:
 *                                  type: string
 *                              urlPortfolio:
 *                                  type: string
 *                              details:
 *                                  type: string
 *                              yearsExperience:
 *                                  type: integer
 *                              studies:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          userId:
 *                                              type: integer
 *                                          name:
 *                                              type: string
 *                                          institution:
 *                                              type: string
 *                                          institutionType:
 *                                              type: string
 *                              positions:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          UserId:
 *                                              type: integer
 *                                          ProfessionalPositionId:
 *                                              type: integer
 *                              languages:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          UserId:
 *                                              type: integer
 *                                          LanguageId:
 *                                              type: integer
 *                                          level:
 *                                              type: integer
 *                              frameworks:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          UserId:
 *                                              type: integer
 *                                          FrameworkId:
 *                                              type: integer
 *                                          level:
 *                                              type: integer
 *                              tools:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          UserId:
 *                                              type: integer
 *                                          ToolId:
 *                                              type: integer
 *                                          level:
 *                                              type: integer
 *          400:
 *              description: bad request
 *
 */
