<?php include "./includes/db.php"; ?>
<?php include "./includes/header.php"; ?>
<?php include "./includes/navbar.php"; ?>
<?php include "./includes/functions.php"; ?>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
<?php
if(isset($_GET['source'])) {
$source = $_GET['source'];
}
switch ($source) {
case 'add_new':
include "./includes/add_blog.php";
break;
case 'view_blogs':
include "./includes/view_blog.php";
break;
default:
header("Location: index.php");
break;
}
?>
    </div>
    <!-- /.content-wrapper -->


<?php include "./includes/footer.php"; ?>