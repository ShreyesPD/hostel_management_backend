module.exports={
    up: async (queryInterface,Sequelize)=>{
    await queryInterface.sequelize.query(`
      CREATE TRIGGER copy_applicant_data_to_student_and_guardian
      AFTER UPDATE ON Applicant
      FOR EACH ROW
      BEGIN
      IF NEW.application_status = 'admitted' AND OLD.application_status <> 'admitted' THEN
  
          INSERT INTO hostel_residents (hostel_resident_id, hostel_resident_name, course_type, hostel_resident_course,
          sex, aadhar, address, contact, distance, photo, email, medical_certificate, bonified_certificate)
          VALUES (NEW.applicant_id, NEW.applicant_name, NEW.course_type, NEW.applicant_course, NEW.sex,
          NEW.aadhar, NEW.address, NEW.contact, NEW.distance, NEW.photo, NEW.email, NEW.medical_certificate,
          NEW.bonified_certificate);
          
          INSERT INTO guardians ( hostel_resident_id, guardian_name, relation, aadhar, address, contact, email)
          VALUES (NEW.applicant_id,NEW.guardian_name, NEW.relation, NEW.guardian_aadhar, NEW.guardian_address, 
          NEW.guardian_contact, NEW.guardian_email);
  
          DELETE FROM Applicant WHERE id = NEW.id;
      END IF;
    END;
    `);
    },
    
    down : async (queryInterface,Sequelize)=>{
     await queryInterface.sequelize.query(`DROP TRIGGER IF EXISTS copy_applicant_data_to_hostel_residents_and_guardian`
    );
  }
    };
  