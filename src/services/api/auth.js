import request from '../request'

const auth = {
    getblogAuthor: async () => {
        try {
            const response = request.get('https://fswd-wp.devnss.com/wp-json/wp/v2/users')
            return response.json()
        }
        catch (e){
            console.log(e)
        }
    }
}

export default auth;