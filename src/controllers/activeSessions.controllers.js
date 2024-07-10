const pool = require("../database/db.js");
const {validationResult} = require("express-validator");

const today = new Date();

const activeSessionController = async (req, res) => {
  try {
    //Collecting Data from the frontEnd in req.body
    const { ops, table, column_values } = req.body;

    let micro_image = "";
    let inner_image = "";

    if (req.files && req.files.length > 0) {
      micro_image = req.files[0] ? req.files[0].path : null;
      inner_image = req.files[1] ? req.files[1].path : null;
    }

    //Validating if all the fields are present in the json formate or not
    if (!(ops || table || column_values)) {
      return res.status(401).json({
        success: false,
        message: "All fields are not provided",
      });
    }
    //Getting The operations in the Request body to search perform the specific Operations
    switch (ops) {
      //CREATE OPERATION
      //Create operation on the basics of Table name
      case "create":
        switch (table) {
          //ACTIVE_SESSION_MASTER CREATE OPERATION
          case "active_session_master":
            const errors = validationResult(req);
            if(!errors.isEmpty()){
              return res.status(400).json({ errors: errors.array() });
            }
            try {
              const {
                session_type,
                session_name,
                session_description,
                therapist,
                created_at,
                created_by,
                updated_at,
                updated_by,
              } = column_values;
              if (
                !(
                  session_type ||
                  session_name ||
                  session_description ||
                  therapist ||
                  created_at ||
                  created_by ||
                  updated_at ||
                  updated_by
                )
              ) {
                return res.status(302).json({
                  success: false,
                  message: "Please Provide all the fields",
                });
              }
              const createActiveSessionMasterQuery =
                "INSERT INTO active_session_master (session_type, session_name,session_description, therapist,micro_image, inner_image,created_at, created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *";
              const createActiveSessionMasterValues = [
                session_type,
                session_name,
                session_description,
                therapist,
                micro_image,
                inner_image,
                created_at,
                created_by,
                updated_at,
                updated_by,
              ];
              try {
                const createActiveSessionMaster = await pool.query(
                  createActiveSessionMasterQuery,
                  createActiveSessionMasterValues
                );
                if (createActiveSessionMaster.rowCount != 0) {
                  return res.status(200).json({
                    success: true,
                    message: "Session created Successfully",
                    data: createActiveSessionMaster.rows,
                  });
                } else {
                  throw new Error("Session not begin created");
                }
              } catch (error) {
                return res.status(302).json({
                  success: false,
                  message: `Could not create table due to : ${error.message}`,
                });
              }
            } catch (err) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error : ${err.message}`,
              });
            }
            break;

          //SESSION_DETAILS CREATE OPERATION
          case "session_details":
            try {
              const {
                session_id,
                date,
                start_time,
                end_time,
                price,
                capacity,
                created_at,
                created_by,
                updated_at,
                updated_by,
              } = column_values;
              if (
                !(
                  session_id ||
                  date ||
                  start_time ||
                  end_time ||
                  price ||
                  capacity ||
                  created_at ||
                  created_by ||
                  updated_at ||
                  updated_by
                )
              ) {
                return res.status(302).json({
                  success: true,
                  message: "All Fields are not Provided",
                });
              }
              const createSessionDetailsQuery =
                "INSERT INTO session_details (session_id, date, start_time, end_time, price, capacity, created_at, created_by, updated_at, updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *";
              const createSessionDetailsValue = [
                session_id,
                date,
                start_time,
                end_time,
                price,
                capacity,
                created_at,
                created_by,
                updated_at,
                updated_by,
              ];
              try {
                const createSessionDetails = await pool.query(
                  createSessionDetailsQuery,
                  createSessionDetailsValue
                );
                if (createSessionDetails.rowCount != 0) {
                  return res.status(200).json({
                    success: true,
                    message: "Successfully created",
                    data: createSessionDetails.rows,
                  });
                } else {
                  throw new Error("Details is not being created");
                }
              } catch (err) {
                return res.status(302).json({
                  success: false,
                  message: `Could not create table due to ${err.message}`,
                });
              }
            } catch (err) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error : ${err.message}`,
              });
            }
            break;

          //COMPLETE_SESSION_MASTER CREATE OPERATION
          case "completed_session_master":
            try {
              const { id } = column_values;
              if (!id) {
                return res.status(302).json({
                  success: true,
                  message: "Session Should be provided",
                });
              }
              const createCompletedSessionQuerySesssionDetails =
                "SELECT date FROM session_details WHERE session_id = $1";
              const createCompletedSessionValueSessionDetails = [id];
              let dateOfCompletedSessionMaster;
              try {
                dateOfCompletedSessionMaster = await pool.query(
                  createCompletedSessionQuerySesssionDetails,
                  createCompletedSessionValueSessionDetails
                );
                if (dateOfCompletedSessionMaster.rowCount == 0) {
                  return res.status(302).json({
                    success: false,
                    message:
                      "Session id is not found in the Session_Details Table",
                  });
                }
              } catch (error) {
                return res.status(302).json({
                  success: false,
                  message: `This error occured due to ${error.message}`,
                });
              }
              const createCompletedSessionMasterQuery =
                "SELECT * FROM active_session_master WHERE id = $1 ";
              const createCompletedSessionMasterValue = [id];
              try {
                const createCompletedSessionMaster = await pool.query(
                  createCompletedSessionMasterQuery,
                  createCompletedSessionMasterValue
                );
                const row = createCompletedSessionMaster.rows[0];
                const completedSessionData = {
                  session_id: row.id,
                  session_type: row.session_type,
                  session_name: row.session_name,
                  session_description: row.session_description,
                  therapist: row.therapist,
                  micro_image: row.micro_image,
                  inner_image: row.inner_image,
                  created_at: today,
                  created_by: row.created_by,
                  updated_at: today,
                  updated_by: row.updated_by,
                };
                console.log(dateOfCompletedSessionMaster.rows[0].date);
                if (dateOfCompletedSessionMaster.rowCount != 0) {
                  const newDate = new Date(
                    dateOfCompletedSessionMaster.rows[0].date
                  );

                  console.log(newDate, " newDate");
                  if (newDate < today) {
                    const {
                      session_id,
                      session_type,
                      session_name,
                      session_description,
                      therapist,
                      micro_image,
                      inner_image,
                      created_at,
                      created_by,
                      updated_at,
                      updated_by,
                    } = { ...completedSessionData };
                    const createCompletedSessionQuery =
                      "INSERT INTO completed_session_master (session_id, session_type, session_name,session_description, therapist,micro_image, inner_image,created_at, created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *";
                    const createCompletedSessionValues = [
                      session_id,
                      session_type,
                      session_name,
                      session_description,
                      therapist,
                      micro_image,
                      inner_image,
                      created_at,
                      created_by,
                      updated_at,
                      updated_by,
                    ];
                    try {
                      const createCompletedSession = await pool.query(
                        createCompletedSessionQuery,
                        createCompletedSessionValues
                      );
                      if (createCompletedSession.rowCount != 0) {
                        const deleteActiveSessionMasterQuery =
                          "DELETE FROM active_session_master WHERE id = $1";
                        const deleteActiveSessionMasterValue = [session_id];
                        const deleteActiveSessionMaster = await pool.query(
                          deleteActiveSessionMasterQuery,
                          deleteActiveSessionMasterValue
                        );
                        if (
                          deleteActiveSessionMaster.rowCount != 0
                        ) {
                          return res.status(200).json({
                            success: true,
                            message: "Completed Session created Successfully",
                            data: createCompletedSession.rows,
                          });
                        }
                      } else {
                        throw new Error("Session is already completed");
                      }
                    } catch (error) {
                      return res.status(302).json({
                        success: false,
                        message: `Error Due to: ${error.message}`,
                      });
                    }
                  } else {
                    throw new Error("Session is not completed till now");
                  }
                }
              } catch (error) {
                return res.status(302).json({
                  success: false,
                  message: `Could not create the row due to :${error.message}`,
                });
              }
            } catch (error) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error : ${error.message}`,
              });
            }
            break;

          //CANCELLED_SESSION_MASTER
          case "cancelled_session_master":
            try {
              const { session_id } = column_values;
              if (!session_id) {
                return res.status(301).json({
                  success: false,
                  message: "All field should be provided",
                });
              }

              const createCancelledSessionMasteQuery =
                "SELECT * FROM active_session_master WHERE id = $1";
              const createCancelledSessionMasteValues = [session_id];
              try {
                const createCancelledSessionMaster = await pool.query(
                  createCancelledSessionMasteQuery,
                  createCancelledSessionMasteValues
                );
                if (createCancelledSessionMaster.rowCount != 0) {
                  const row = createCancelledSessionMaster.rows[0];
                  const activeSessionMasterData = {
                    session_id: row.id,
                    session_type: row.session_type,
                    session_type: row.session_type,
                    session_name: row.session_name,
                    session_description: row.session_description,
                    therapist: row.therapist,
                    micro_image: row.micro_image,
                    inner_image: row.inner_image,
                    created_at: today,
                    created_by: row.created_by,
                    updated_at: today,
                    updated_by: row.updated_by,
                  };
                  const {
                    session_id,
                    session_type,
                    session_name,
                    session_description,
                    therapist,
                    micro_image,
                    inner_image,
                    created_at,
                    created_by,
                    updated_at,
                    updated_by,
                  } = { ...activeSessionMasterData };
                  const createCancelledSessionMasterQuery =
                    "INSERT INTO cancelled_session_master (session_id, session_type, session_name,session_description, therapist,micro_image, inner_image,created_at, created_by,updated_at,updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *";
                  const createCancelledSessionMasterValues = [
                    session_id,
                    session_type,
                    session_name,
                    session_description,
                    therapist,
                    micro_image,
                    inner_image,
                    created_at,
                    created_by,
                    updated_at,
                    updated_by,
                  ];
                  const newCancelledSession = await pool.query(
                    createCancelledSessionMasterQuery,
                    createCancelledSessionMasterValues
                  );
                  if (newCancelledSession.rowCount != 0) {
                    const deleteActiveSessionMasterQuery =
                      "DELETE FROM active_session_master WHERE id = $1";
                    const deleteActiveSessionMasterValue = [session_id];
                    
                    const deleteActiveSessionMaster = await pool.query(
                      deleteActiveSessionMasterQuery,
                      deleteActiveSessionMasterValue
                    );
                    if (
                     
                      deleteActiveSessionMaster.rowCount != 0
                    ) {
                      return res.status(200).json({
                        success: true,
                        message: "Cancelled Session created Successfully",
                        data: newCancelledSession.rows,
                      });
                    }
                  }
                } else {
                  throw new Error();
                }
              } catch (error) {
                return res.status(500).json({
                  success: false,
                  message: `Could not add the Row because :${err.message}`,
                });
              }
            } catch (err) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error :${err.message}`,
              });
            }
            break;

          default:
            return res.status(402).json({
              success: false,
              message: "Table not found",
            });
        }

      //READ OPERATION
      //Read operation on the basics of Table name
      case "read":
        switch (table) {
          //ACTIVE_SESSION_MASTER READ OPERATION
          case "active_session_master":
            try {
              const { id } = column_values;
              if (!id) {
                return res.status(302).json({
                  success: true,
                  message: "Session Id needed",
                });
              }
              const readSessionDetailsQuery =
                "SELECT * FROM session_details WHERE session_id = $1";
              const readSessionDetailsValues = [id];
              const readActiveSessionMasterQuery =
                "SELECT * FROM active_session_master WHERE id = $1";
              try {
                const readActiveSessionMaster = await pool.query(
                  readActiveSessionMasterQuery,
                  readSessionDetailsValues
                );
                const readSessionDetails = await pool.query(
                  readSessionDetailsQuery,
                  readSessionDetailsValues
                );
                if(readSessionDetails.rowCount == 0){
                  return res.status(200).json({
                    success: true,
                    message: "Session Details is not Found",
                    data: readActiveSessionMaster.rows[0],
                  });
                }
                if (
                  readActiveSessionMaster.rowCount != 0 &&
                  readSessionDetails.rowCount != 0
                ) {
                  const fullData = [
                    ...readActiveSessionMaster.rows,
                    ...readSessionDetails.rows,
                  ];
                  return res.status(200).json({
                    success: true,
                    message: "All the Rows From the Active Session table",
                    data: fullData,
                  });
                } else {
                  throw new Error(
                    "Sesssion Details or the Active Session Master"
                  );
                }
              } catch (error) {
                return res.status(302).json({
                  succes: false,
                  message: `Could perform the Operation due to error : ${error.message}`,
                });
              }
            } catch (error) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error :${error.message}`,
              });
            }
            break;

          //SESSION_DETAILS READ OPERATION
          case "session_details":
            try {
              const { id } = column_values;
              if (!id) {
                return res.status(302).json({
                  success: true,
                  message: "Session Id needed",
                });
              }
              const readSessionDetailsQuery ="SELECT * FROM session_details WHERE session_id = $1"
              const readSessionDetailsValues = [id]

              try {
                const readSessionDetails = await pool.query(
                  readSessionDetailsQuery, readSessionDetailsValues
                );
                if (readSessionDetails.rowCount != 0) {
                  return res.status(200).json({
                    success: true,
                    message: "All the Rows From the Session Details table",
                    data: readSessionDetails.rows[0],
                  });
                } else {
                  return res.status(302).json({
                    success: false,
                    message: "No Data Found",
                  });
                }
              } catch (error) {
                throw new Error();
              }
            } catch (err) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error :${err.message}`,
              });
            }
            break;

          //COMPLETE_SESSION_MASTER READ OPERATION
          case "completed_session_master":
            try {
              const readCompletedSessionMasterQuery =
                "SELECT * FROM completed_session_master";
              try {
                const readCompletedSessionMaster = await pool.query(
                  readCompletedSessionMasterQuery
                );
                if (readCompletedSessionMaster.rowCount != 0) {
                  return res.status(200).json({
                    success: true,
                    message: "All the Rows From the Active Session table",
                    data: readCompletedSessionMaster.rows,
                  });
                } else {
                  throw new Error("Problem in Fetching Data");
                }
              } catch (error) {
                return res.status(302).json({
                  succes: false,
                  message: `Could perform the Operation due to error : ${error.message}`,
                });
              }
            } catch (error) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error :${error.message}`,
              });
            }
            break;

          //CANCELLED_SESSION_MASTER READ OPERATION
          case "cancelled_session_master":
            try {
              const readCancelledSessionMasterQuery =
                "SELECT * FROM cancelled_session_master";
              try {
                const readCancelledSessionMaster = await pool.query(
                  readCancelledSessionMasterQuery
                );
                if (readCancelledSessionMaster.rowCount != 0) {
                  return res.status(200).json({
                    success: true,
                    message: "All the Rows From the Active Session table",
                    data: readCancelledSessionMaster.rows,
                  });
                } else {
                  throw new Error("Problem in Fetching Data");
                }
              } catch (error) {
                return res.status(302).json({
                  succes: false,
                  message: `Could perform the Operation due to error : ${error.message}`,
                });
              }
            } catch (error) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error :${error.message}`,
              });
            }
            break;
          default:
            return res.status(402).json({
              success: false,
              message: "Table not found",
            });
        }

      //UPDATE OPERATION
      //Update on the basics if the table name
      case "update":
        switch (table) {
          //ACTIVE_SESSION_MASTER UPDATE OPERATION
          case "active_session_master":
            const errors = validationResult(req);
            if(!errors.isEmpty()){
              return res.status(400).json({ errors: errors.array() });
            }
            try {
              const {
                session_type,
                session_name,
                session_description,
                therapist,
                created_at,
                created_by,
                updated_at,
                updated_by,
                id
              } = column_values
              if (
                !(
                  session_type ||
                  session_name ||
                  session_description ||
                  therapist ||
                  created_at ||
                  created_by ||
                  updated_at ||
                  updated_by ||
                  id
                )
              ) {
                return res.status(302).json({
                  success: false,
                  message: "Please Provide all the fields",
                });
              }
              const updateActiveSessionMasterQuery =
                "UPDATE active_session_master SET session_type = $1 , session_name = $2 , session_description = $3 , therapist =$4 , micro_image = $5 , inner_image = $6 , created_at =$7 , created_by =$8 , updated_at =$9 , updated_by=$10 WHERE id=$11";
              const updateActiveSessionMasterValues = [
                session_type,
                session_name,
                session_description,
                therapist,
                micro_image,
                inner_image,
                created_at,
                created_by,
                updated_at,
                updated_by,
                id,
              ];
              try {
                const updateActiveSessionMaster = await pool.query(
                  updateActiveSessionMasterQuery,
                  updateActiveSessionMasterValues
                );
                if (updateActiveSessionMaster.rowCount != 0) {
                  return res.status(200).json({
                    success: true,
                    message: "Session updated Successfully",
                    data: updateActiveSessionMaster.rows,
                  });
                } else {
                  throw new Error("Session not begin Updated");
                }
              } catch (error) {
                return res.status(302).json({
                  success: false,
                  message: `Could not create Data due to : ${error.message}`,
                });
              }
            } catch (error) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error : ${error.message}`,
              });
            }
            break;

          //SESSION_DETAILS UPDATE OPERATION
          case "session_details":
            try {
              const {
                date,
                start_time,
                end_time,
                price,
                capacity,
                created_at,
                created_by,
                updated_at,
                updated_by,
              } = column_values.updated_values;
              console.log(start_time);
              const { session_id } = column_values.session_id;
              console.log(session_id);
              if (
                !(
                  date &&
                  start_time &&
                  end_time &&
                  price &&
                  capacity &&
                  created_at &&
                  created_by &&
                  updated_at &&
                  updated_by &&
                  session_id
                )
              ) {
                return res.status(302).json({
                  success: true,
                  message: "All Fields are not Provided",
                });
              }
              const updateSessionDetailsQuery =
                "UPDATE session_details SET date = $1, start_time = $2, end_time = $3, price = $4, capacity = $5, created_at = $6, created_by = $7, updated_at = $8, updated_by = $9 WHERE session_id = $10";
              const updateSessionDetailsValue = [
                date,
                start_time,
                end_time,
                price,
                capacity,
                created_at,
                created_by,
                updated_at,
                updated_by,
                session_id,
              ];
              try {
                const result = await pool.query(
                  updateSessionDetailsQuery,
                  updateSessionDetailsValue
                );
                const updateSessionDetails = await pool.query(
                  updateSessionDetailsQuery,
                  updateSessionDetailsValue
                );
                console.log(updateSessionDetails.rowCount);
                if (updateSessionDetails.rowCount != 0) {
                  return res.status(200).json({
                    success: true,
                    message: "Successfully updated",
                    data: updateSessionDetails.rows,
                  });
                } else {
                  throw new Error("Details is not being Upadated");
                }
              } catch (error) {
                return res.status(302).json({
                  success: false,
                  message: `Could not create table due to ${error.message}`,
                });
              }
            } catch (error) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error : ${error.message}`,
              });
            }
            break;
          default:
            return res.status(402).json({
              success: false,
              message: "Table not found",
            });
        }

      //DELETE OPERATION
      //Update on the basics if the table name
      case "delete":
        switch (table) {
          //ACTIVE_SESSION_MASTER DELETE OPERATION
          case "active_session_master":
            try {
              const { session_id } = column_values;
              if (!session_id) {
                return res.status(404).json({ message: "Id is not present" });
              }
              const deletequery =
                "DELETE FROM active_session_master WHERE id = $1";
              const deleteValues = [session_id];
              const deleteSessionDetailsquery =
                "DELETE FROM session_details WHERE session_id = $1";
              const deleteSessionDetailsValues = [session_id];
              const deletedSessionDetails = await pool.query(
                deleteSessionDetailsquery,
                deleteSessionDetailsValues
              );
              if (deletedSessionDetails.rowCount != 0) {
                const deletedactiveSessionDetails = await pool.query(
                  deletequery,
                  deleteValues
                );
                if (deletedactiveSessionDetails.rowCount == 0)
                  throw new Error("Invalid Data");
                return res.status(200).json({
                  message: "Data delete Successfully",
                  data: deletedSessionDetails.rows[0],
                });
              }
            } catch (error) {
              console.log(error);
              return res.status(404).json({ message: error.meassage });
            }
            break;

          //COMPLETE_SESSION_MASTER DELETE OPERATION
          case "completed_session_master":
            try {
              const { session_id } = column_values;
              if (!session_id) {
                return res.status(302).json({
                  success: false,
                  message: "All field should be provided",
                });
              }
              const deleteCompletedSessionMasterQuery =
                "DELETE FROM completed_session_master WHERE session_id = $1";
              const deleteCompletedSessionMasterValues = [session_id];

              try {
                await pool.query("BEGIN");
                const deleteCompletedSessionMaster = await pool.query(
                  deleteCompletedSessionMasterQuery,
                  deleteCompletedSessionMasterValues
                );

                if (deleteCompletedSessionMaster.rowCount != 0) {
                  await pool.query("COMMIT");
                  return res.status(200).json({
                    success: true,
                    message: "Data is Deleted successfully",
                    data: deleteCompletedSessionMaster.rows[0],
                  });
                } else {
                  await pool.query("ROLLBACK");
                  return res.status(302).json({
                    success: true,
                    message: "ID not found",
                  });
                }
              } catch (error) {
                await pool.query("ROLLBACK");
                throw new Error("Not Able to fetch the data");
              }
            } catch (error) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error :${error.message}`,
              });
            }
            break;

          //CANCELLED_SESSION_MASTER READ OPERATION
          case "cancelled_session_master":
            try {
              const { session_id } = column_values;
              if (!session_id) {
                return res.status(302).json({
                  success: false,
                  message: "All field should be provided",
                });
              }
              const deleteCancelledSessionMasterQuery =
                "DELETE FROM cancelled_session_master WHERE session_id = $1";
              const deleteCancelledSessionMasterValues = [session_id];

              try {
                await pool.query("BEGIN");
                const deleteCancelledSessionMaster = await pool.query(
                  deleteCancelledSessionMasterQuery,
                  deleteCancelledSessionMasterValues
                );
                // console.log(deleteCancelledSessionMaster);
                if (deleteCancelledSessionMaster.rowCount != 0) {
                  await pool.query("COMMIT");
                  return res.status(200).json({
                    success: true,
                    message: "Data is Deleted successfully",
                    data: deleteCancelledSessionMaster.rows[0],
                  });
                } else {
                  await pool.query("ROLLBACK");
                  return res.status(302).json({
                    success: true,
                    message: "ID not found",
                  });
                }
              } catch (error) {
                await pool.query("ROLLBACK");
                throw new Error("Not Able to fetch the data");
              }
            } catch (error) {
              return res.status(500).json({
                success: false,
                message: `Internal Server Error :${error.message}`,
              });
            }

          default:
            return res.status(402).json({
              success: false,
              message: "Table not found",
            });
        }
      default:
        return res.status(402).json({
          success: false,
          message: "Operation not found to perform",
        });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `Internal server Error :${error.message}`,
    });
  }
};

module.exports = { activeSessionController };
