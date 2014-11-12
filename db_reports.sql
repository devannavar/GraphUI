drop TABLE psp_ee_count_report;
CREATE TABLE psp_ee_count_report
(
         emp_count      NUMBER(5) ,
         co_count      NUMBER(15) ,
         service        VARCHAR2 (255 Char),        
         created_date   DATE DEFAULT (sysdate)
 );
 /
CREATE OR REPLACE PROCEDURE PSP_LOCAL.p_get_employee_count AS
    BEGIN
  DECLARE
   e_count Number :=0;
   c_count Number :=0;
   c_service psp_company_service.service_fk%type;
   CURSOR c_customers is
      select counts EMPLOYEE_COUNT, count(company_fk) NO_OF_CUSTOMERS,SERVICETYPE SERVICE_TYPE  from  (
select ee.company_fk,count(*) counts,decode(cs.SERVICE_FK,null,'DIY','ASSISTED' ) SERVICETYPE
 from PSP_EMPLOYEE@PSP_SYS_LINK2 ee
 left join psp_company_service@PSP_SYS_LINK2 cs on cs.company_fk=ee.company_fk and SERVICE_FK='Tax'
 where ee.STATUS_CD='Active'
group by ee.company_fk,decode(cs.SERVICE_FK,null,'DIY','ASSISTED' )
) res 
group by counts,SERVICETYPE
order by counts;
BEGIN
   OPEN c_customers;
   LOOP
      FETCH c_customers into e_count, c_count, c_service;
      EXIT WHEN c_customers%notfound;
	  
	  INSERT INTO psp_ee_count_report (emp_count,co_count,service) VALUES (e_count,c_count,c_service)  ;
      dbms_output.put_line(e_count || ' ' || c_count || ' ' || c_service);
   END LOOP;
   CLOSE c_customers;
END;

      COMMIT ;
    END;
/

 DECLARE    
     p_jobno number;
BEGIN
      DBMS_JOB.SUBMIT (:p_jobno,'p_get_employee_count;', SYSDATE,  'SYSDATE + (10/(24*60*60))');
      COMMIT;  /* must commit after SUBMIT */
   END;
  /
  DROP PUBLIC DATABASE LINK PSP_SYS_LINK2;

CREATE PUBLIC DATABASE LINK PSP_SYS_LINK2
 CONNECT TO PSPAPP
 IDENTIFIED BY <PWD>
 USING 'PSPSYS';
