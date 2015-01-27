module.exports = function(app){

  app.get('/make_a_deal', function(req, res) {
    res.render('make_a_deal', {title: 'Make a Deal | Chris Learns JS', style: 'make_a_deal'});
  });
  app.get('/day2/make_a_deal_choose_1.html', function(req, res) {
    res.render('day2/make_a_deal_choose_1', {title: 'Make a Deal | Chris Learns JS', style: 'make_a_deal'});
  });
  app.get('/day2/make_a_deal_choose_2.html', function(req, res) {
    res.render('day2/make_a_deal_choose_2', {title: 'Make a Deal | Chris Learns JS', style: 'make_a_deal'});
  });
  app.get('/day2/make_a_deal_choose_3.html', function(req, res) {
    res.render('day2/make_a_deal_choose_3', {title: 'Make a Deal | Chris Learns JS', style: 'make_a_deal'});
  });
  app.get('/day2/make_a_deal_final_1.html', function(req, res) {
    res.render('day2/make_a_deal_final_1', {title: 'Make a Deal | Chris Learns JS', style: 'make_a_deal'});
  });
  app.get('/day2/make_a_deal_final_2.html', function(req, res) {
    res.render('day2/make_a_deal_final_2', {title: 'Make a Deal | Chris Learns JS', style: 'make_a_deal'});
  });
  app.get('/day2/make_a_deal_final_3.html', function(req, res) {
    res.render('day2/make_a_deal_final_3', {title: 'Make a Deal | Chris Learns JS', style: 'make_a_deal'});
  });

};