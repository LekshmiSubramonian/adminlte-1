import React, { Component } from 'react'
import '../css/adminlte.css'
import Alerts from '../UI/Alerts'
import Callouts from '../UI/Callouts'
import ColorPalette from '../UI/ColorPalette'

export class General extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6" >
                                    <h1>Inline Charts</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Inline Charts</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="content">
                        <div className="container-fluid">
                            <div className="card card-default color-palette-box">
                                <div className="card-header">
                                    <h3 className="card-title">
                                    <i className="fas fa-tag"></i>
                                        Color Palette
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="col-12">
                                        <h5>Theme Colors</h5>
                                    </div>
                                    <div className="row">
                                        <ColorPalette type="Primary" color="#007bff"  />
                                        <ColorPalette type="Secondary" color="#6c757d" />
                                        <ColorPalette type="Info" color="#17a2b8"  />
                                        <ColorPalette type="Success" color="#28a745"  />
                                        <ColorPalette type="Warning" color="#ffc107"  />
                                        <ColorPalette type="Danger" color="#dc3545"  />
                                    </div>
                                    <div className="col-12">
                                        <h5 className="mt-3">Black/White Nuances</h5>
                                    </div>
                                    <div className="row">
                                        <ColorPalette type="Black" color="#000000"  />
                                        <ColorPalette type="Gray-Dark" color="#343a40" />
                                        <ColorPalette type="Gray" color="#adb5bd"  />
                                        <ColorPalette type="Light" color="#1f2d3d"  />
                                    </div>
                                    <div className="col-12">
                                        <h5 className="mt-3">Colors</h5>
                                    </div>
                                    <div className="row">
                                        <ColorPalette type="Indigo" color="#6610f2"  />
                                        <ColorPalette type="Lightblue" color="#3c8dbc" />
                                        <ColorPalette type="Navy" color="#001f3f"  />
                                        <ColorPalette type="Purple" color="#605ca8"  />
                                        <ColorPalette type="Fuchsia" color="#f012be"  />
                                        <ColorPalette type="Pink" color="#e83e8c" />
                                        <ColorPalette type="Maroon" color="#d81b60"  />
                                        <ColorPalette type="Orange" color="#ff851b"  />
                                        <ColorPalette type="Lime" color="#01ff70" />
                                        <ColorPalette type="Teal" color="#39cccc"  />
                                        <ColorPalette type="Olive" color="#3d9970"  />
                                    </div>
                                </div>
                            </div>

                            {/* Alerts and Callouts */}


                            <h5 className="mt-4 mb-2">Alerts and Callouts</h5>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card card-default">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                            <i className="fas fa-exclamation-triangle"></i>
                                                Alerts
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <Alerts color="danger" message="Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my
                                                entiresoul, like these sweet mornings of spring which I enjoy with my whole heart.
                                            " />
                                            <Alerts color="info" message="Info alert preview. This alert is dismissable." />
                                            <Alerts color="warning" message="Warning alert preview. This alert is dismissable." />
                                            <Alerts color="success" message="Success alert preview. This alert is dismissable." />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card card-default">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                            <i className="fas fa-bullhorn"></i>
                                            Callouts
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <Callouts color="danger" message="There is a problem that we need to fix. A wonderful serenity has taken possession of my entire
                                                    soul,like these sweet mornings of spring which I enjoy with my whole heart." />
                                            <Callouts color="info" message="Follow the steps to continue to payment." />
                                            <Callouts color="warning" message="This is a yellow callout" />
                                            <Callouts color="success" message="This is a green callout" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <h5 className="mt-4 mb-2">Tabs in Cards</h5>

                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header d-flex p-0">
                                            <h3 className="card-title p-3">Tabs</h3>
                                            <ul className="nav nav-pills ml-auto p-2">
                                            <li className="nav-item"><a className="nav-link active" href="#tab_1" data-toggle="tab">Tab 1</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#tab_2" data-toggle="tab">Tab 2</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#tab_3" data-toggle="tab">Tab 3</a></li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                                Dropdown <span className="caret"></span>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" tabindex="-1" href="#">Action</a>
                                                    <a className="dropdown-item" tabindex="-1" href="#">Another action</a>
                                                    <a className="dropdown-item" tabindex="-1" href="#">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" tabindex="-1" href="#">Separated link</a>
                                                </div>
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab_1">
                                                    A wonderful serenity has taken possession of my entire soul,
                                                    like these sweet mornings of spring which I enjoy with my whole heart.
                                                    I am alone, and feel the charm of existence in this spot,
                                                    which was created for the bliss of souls like mine. I am so happy,
                                                    my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
                                                    that I neglect my talents. I should be incapable of drawing a single stroke
                                                    at the present moment; and yet I feel that I never was a greater artist than now.
                                                </div>
                                                <div className="tab-pane" id="tab_2">
                                                    The European languages are members of the same family. Their separate existence is a myth.
                                                    For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ
                                                    in their grammar, their pronunciation and their most common words. Everyone realizes why a
                                                    new common language would be desirable: one could refuse to pay expensive translators. To
                                                    achieve this, it would be necessary to have uniform grammar, pronunciation and more common
                                                    words. If several languages coalesce, the grammar of the resulting language is more simple
                                                    and regular than that of the individual languages.
                                                </div>
                                                <div className="tab-pane" id="tab_3">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default General
