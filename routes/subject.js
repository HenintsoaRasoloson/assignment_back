let Subject = require("../model/subject");

// Récupérer tous les subjects (GET)

function getSubjects(req, res){
    Subject.find((err, subjects) => {
        if(err){
            res.send(err)
        }
        res.send(subjects);
    });
}
// Récupérer un subject par son id (GET)
function getSubject(req, res) {
    let subjectId = req.params.id;
    Subject.findOne({ id : subjectId }, (err,subject) => {
        if(err){
            res.json(err);
        }
        res.json(subject);
    })
}
function postSubject(req, res){
    let subject = new Subject();
    subject.id = req.body.id;
    subject.nom = req.body.nom;
    subject.image_matiere = req.body.image_matiere;
    subject.image_prof = req.body.image_prof;

    subject.save((err)=>{
        if(err){
            res.json("cant post this subject", err);
        }
        res.json({message: `${subject.nom} saved` })
    });
}


module.exports = {
    getSubjects,
    getSubject,
    postSubject
  };
  