@extends(backpack_view('blank'))

@php
    $widgets['before_content'][] = [
        'type' => 'jumbotron',
        'heading' => trans('backpack::base.welcome'),
        'content' => trans('backpack::base.use_sidebar'),
        'button_link' => backpack_url('logout'),
        'button_text' => trans('backpack::base.logout'),
    ];

        Widget::add()
            ->to('before_content')
            ->type('div')
            ->class('row mt-3')
            ->content([
                //... your widgets here
            ]);
@endphp

@section('content')
@endsection