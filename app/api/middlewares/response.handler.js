export class ResponseHandler {
    async response(statusCode, responseContent = null) {
        return {
                status: statusCode,
                content: responseContent
            };
    }

    respond(req, res, result) {
        res.status(result.status).json(result);
    }
}

export default new ResponseHandler();