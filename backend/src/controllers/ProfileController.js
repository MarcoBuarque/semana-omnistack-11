const connection = require('../database/conection')

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const { page = 1 } = request.query;

    const [count] = await connection('incidents').where('ong_id', ong_id).count();

    const result = await connection('incidents')
      .where('ong_id', ong_id)
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    response.header('X-TOTAL-COUNT', count['count(*)'])

    return response.json(result);
  }
}