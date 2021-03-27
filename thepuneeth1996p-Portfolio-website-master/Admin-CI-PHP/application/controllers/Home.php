<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {



	public $data = [];


	public function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->library(['ion_auth', 'form_validation', 'grocery_CRUD']);
		$this->load->helper(['url', 'language']);

		$this->form_validation->set_error_delimiters($this->config->item('error_start_delimiter', 'ion_auth'), $this->config->item('error_end_delimiter', 'ion_auth'));

		$this->lang->load('auth');
		if (!$this->ion_auth->logged_in())
		{
			redirect('auth/login', 'refresh');
		}
	}



	public function _example_output($output = null)
	{
		$this->load->view('example.php',(array)$output);
	}



	public function index()
	{	

		
		if (!$this->ion_auth->is_admin())
		{	
			$this->load->view('template/header');
			$this->load->view('template/user_info');
			$this->load->view('index');
			$this->load->view('template/footer');
			
		}
		
		
		// this below code block is for the admin Page Only where certain features like
		// adding new users can be done 

		else { 
			$this->load->view('template/headerAdmin');
			$this->load->view('template/user_info');
			$this->load->view('index');
			$this->load->view('template/footer');
		}
	}
	public function blogs_table()
	{	
		$crud = new grocery_CRUD();
		$crud->set_table('blogs');
		$crud->set_subject(' <i class="fa fa-picture-o"></i> Blogs');
		$crud->columns(['card_image','card_heading','blog_type']);
		$crud->field_type('date_added', 'invisible');
		
		// $crud->field_type('blog_info', 'text');
		// $crud->setTexteditor(['blog_info']);



		$output = $crud->render();
		

		$this->load->view('template/header');
		$this->load->view('template/user_info');
		$this->_example_output($output);
		$this->load->view('template/footer');

	}
	public function donations_table()
	{	
		$crud = new grocery_CRUD();
		$crud->set_table('donation');
		$crud->columns(['userName','Amount']);
		$crud->field_type('dated', 'invisible');

		$output = $crud->render();


		$this->load->view('template/header');
		$this->load->view('template/user_info');
		$this->_example_output($output);
		$this->load->view('template/footer');

	}

	public function students_table()
	{	
		$crud = new grocery_CRUD();
		$crud->set_table('students');
		$crud->columns(['sid','userName']);
		$crud->field_type('dated', 'invisible');

		$output = $crud->render();


		$this->load->view('template/header');
		$this->load->view('template/user_info');
		$this->_example_output($output);
		$this->load->view('template/footer');

	}
}
