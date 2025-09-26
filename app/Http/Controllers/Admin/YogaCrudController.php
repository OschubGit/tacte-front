<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use App\Http\Requests\YogaRequest;

/**
 * Class YogaCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class YogaCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    // use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\YogaSession::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/yoga');
        CRUD::setEntityNameStrings('yoga', 'yoga');
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        // CRUD::setFromDb(); // set columns from db columns.
        CRUD::column('date')->type('date')->label('Fecha');
        CRUD::column('name')->type('text')->label('Nombre de sesión');
        CRUD::column('description')->type('text')->label('Descripción');
        CRUD::column('start_time')->type('time')->label('Hora de inicio');
        CRUD::column('end_time')->type('time')->label('Hora de fin');
        CRUD::column('max_allowed_reserves')->type('number')->label('Aforo máximo');
        CRUD::column('current_reserves')->type('number')->label('Reservas actuales');

        /**
         * Columns can be defined using the fluent syntax:
         * - CRUD::column('price')->type('number');
         */
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(YogaRequest::class);
        // CRUD::setFromDb(); // set fields from db columns.

        //add the fields you want to show in the create form
        CRUD::field('date')->type('date')->label('Fecha')->format('d-m-Y');
        CRUD::field('name')->type('text')->label('Nombre de sesión');
        CRUD::field('description')->type('text')->label('Descripción');
        CRUD::field('start_time')->type('time')->label('Hora de inicio');
        CRUD::field('end_time')->type('time')->label('Hora de fin');
        CRUD::field('max_allowed_reserves')->type('number')->label('Aforo máximo');
        CRUD::field('status')->type('hidden')->value('free');
        CRUD::field('created_by')->type('hidden')->value(backpack_user()->id);

        /**
         * Fields can be defined using the fluent syntax:
         * - CRUD::field('price')->type('number');
         */
    }

    /**
     * Define what happens when the Update operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }

    protected function setupShowOperation()
    {
        $this->setupListOperation();
    }
}
