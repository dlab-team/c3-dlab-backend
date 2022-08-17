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
 *              tools: [{UserId: 1, ToolId: 1, level: 1}]
 * @swagger
 * /api/1/profile/adduser:
 *  put:
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
 * /api/1/profile/getuser:
 *  post:
 *      summary: Retrieves user's data
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userId:
 *                              type: integer
 *      responses:
 *          200:
 *              description: user profile data
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                              email:
 *                                  type: string
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
 *                              EducationLevelId:
 *                                  type: integer
 *                              WorkExperience:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: integer
 *                                      urlCv:
 *                                          type: string
 *                                      urlLinkedin:
 *                                          type: string
 *                                      urlGithub:
 *                                          type: string
 *                                      urlPortfolio:
 *                                          type: string
 *                                      details:
 *                                          type: string
 *                                      yearsExperience:
 *                                          type: integer
 *                                      userId:
 *                                          type: integer
 *                              Studies:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                          name:
 *                                              type: string
 *                                          institution:
 *                                              type: string
 *                                          institutionType:
 *                                              type: string
 *                              UserProfessionalPositions:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          ProfessionalPositionId:
 *                                              type: integer
 *                                          ProfessionalPosition:
 *                                              type: object
 *                                              properties:
 *                                                  name:
 *                                                      type: string
 *                              LanguageLevels:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          LanguageId:
 *                                              type: integer
 *                                          level:
 *                                              type: integer
 *                                          Language:
 *                                              type: object
 *                                              properties:
 *                                                  name:
 *                                                      type: string
 *                              FrameworkLevels:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          FrameworkId:
 *                                              type: integer
 *                                          level:
 *                                              type: integer
 *                                          Framework:
 *                                              type: object
 *                                              properties:
 *                                                  name:
 *                                                      type: string
 *                              ToolLevels:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          ToolId:
 *                                              type: integer
 *                                          level:
 *                                              type: integer
 *                                          Tool:
 *                                              type: object
 *                                              properties:
 *                                                  name:
 *                                                      type: string
 */
