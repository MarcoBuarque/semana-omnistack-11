const connection = require('../database/conection')

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;
    const { page = 1 } = request.query;
    const result = await connection('incidents')
      .where('ong_id', ong_id)
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    return response.json(result);
  }
}