    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0 text-dark">Categories</h1>
            </div><!-- /.col -->
            

            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">

            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Add Categories</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <form action="./includes/functions.php" method="POST" class="input-group mb-3">
                            <div class="input-group-prepend ">
                                <input type="submit" name="cat_add" class="btn btn-primary" value="Add" >
                            </div>
                            <div class="col-4">
                                <input type="text" name="cat_title" class="form-control" placeholder="Add New Category">
                            </div>                            
                        </form>
                    </div>
                </div>
                <!-- /.card-body -->

                <!-- 13 July 2020 | For displaying the Categoried. -->
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">All Categories</h3>

                                <div class="card-tools">
                                <div class="input-group input-group-sm" style="width: 150px;">
                                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                                    <div class="input-group-append">
                                    <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                        <th>Categories ID</th>
                                        <th>Categories Title</th>
                                        <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php show_category(); ?>
                                    </tbody>
                                </table>
                            </div>
                        <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                </div>

            </div>
            
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->