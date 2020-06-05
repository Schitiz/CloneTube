exports.join = (req, res) => res.render('join');
exports.login = (req, res) => res.render('login');
exports.logout = (req, res) => res.render('logout');
exports.getAllUsers = (req, res) => res.render('user index');
exports.editProfile = (req, res) => res.render('user edit');
exports.changePassword = (req, res) => res.render('Change Password');
exports.getUserDetails = (req, res) => res.render('User Details');
