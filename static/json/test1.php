<?php 
header('Access-Control-Allow-Origin:*'); 
header('content-type:application:json;charset=utf8');
// 响应类型  
/*header('Access-Control-Allow-Methods:POST');  */
// 响应头设置  
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
require_once ("../include/common.inc.php");
$data =array();
$id =$_GET['typeid'];
$sql = "Select title,litpic,description From dede_archives where typeid = '" . $id . "'";

$dsql->SetQuery($sql);//将SQL查询语句格式化
$dsql->Execute();//执行SQL操作
while($row = $dsql->GetArray()){
	array_push($data,$row);
}
	 $callback = $_GET['callback'];
echo $callback.'('.json_encode($data).')';
exit;

?>