const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Node.js App', () => {
    it('should return the welcome message', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.text).to.equal('Welcome to the Sample Node.js Web Application!');
                done();
            });
    });
});
