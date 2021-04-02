const express = require("express");
const router = express.Router();
const {addTransaction,getAllTransactions,getTransactionsByUserId,test,getUserTransactionsData} = require("../controllers/transactions");
const {getUserById,auth} = require("../controllers/auth");


router.param("userId",getUserById);
router.post("/:userId/add_transaction",addTransaction);
router.get("/all",getAllTransactions)
// router.get("/:userId",getTransactionsByUserId);
router.get("/:userId",test);

router.get("/:userId/transaction_summary",auth,getUserTransactionsData);

module.exports = router;


//605bf1a4f3834a2e94ee0844
