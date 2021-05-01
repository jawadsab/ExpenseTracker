const express = require("express");
const router = express.Router();
const {testing ,addTransaction,getAllTransactions,getTransactionsByUserId,test,getUserTransactionsData} = require("../controllers/transactions");
const {getUserById,auth} = require("../controllers/auth");


router.param("userId",getUserById);
router.post("/:userId/add_transaction",auth,addTransaction);
router.get("/all",getAllTransactions)
router.get("/:userId",auth,getTransactionsByUserId);
router.get("/:userId",test);

router.get("/:userId/transaction_summary",auth,getUserTransactionsData);
// router.get("/:userId/transaction_summary",auth,testing);

module.exports = router;


//605bf1a4f3834a2e94ee0844
