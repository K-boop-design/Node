const Product = require('../models/product')
exports.getForm=(req, res) => {
    console.log('Hello');
    const object = new Product(req.body)
    object.save()
    console.log(req.body);
    res.send({title:object.title});
}

exports.formSubmit=(req,res,next)=>{
    console.log('Hello default')
    res.send("<form action='/submit' method='POST'><input type='text' name='text'><input type='submit' value='Submit'></form>")
    // res.send('<html>')
    // res.send('<head><title>My app</title><head>')
    // res.send('<body>')
    // res.send("<form onSubmit='/submit'><input type='text'></form>")
    // res.send('</body></html>')
    
}

exports.postFileSubmit=(req,res,next)=>{
    console.log(req.file)
}

exports.fileSubmit=(req,res,next)=>{
    res.send('<form action="submit2" method="POST" enctype="multipart/form-data"><input type="file" name="image"><input type="submit" name="Submit"></form>')
}