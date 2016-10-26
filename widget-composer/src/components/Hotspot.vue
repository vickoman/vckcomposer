<template>
  <div class="widget-editor" id="widgetEditor">
            <!--Header -->
            <header class="header" >
                <div class="header__title">Widget Editor</div>
                <svg>
                    <use xlink:href="#close-x"></use>
                </svg>
                
            </header>
            <!-- Widget Editor Workspace -->
            <div class="workspace">
                <!-- Widget Canvas -->
                <div class="canvas">
                    <div class="toolbar-widget">
                        <ul>
                            <li class="widget-title">
                                <label class="widget-title__label" for="">HOTSPOT WIDGET:</label>
                                <div class="input-text">
                                    <label class="u-hidden" for="txt-input"></label>
                                    <input type="text" name="" class="txt-input" placeholder="Untitled" value=""/>
                                </div>
                            </li>
                            <li>
                                <div class="cmd-menu-container">
                                    <div class="cmd-menu">
                                        <svg>
                                            <use xlink:href="#knife"></use>
                                        </svg>
                                    </div>
                                    <div class="mask-cmd-tools">
                                        <div class="cmd-tools">
                                            <ul>
                                                <li>
                                                <svg><use xlink:href="#undo"></use></svg>
                                            </li>
                                            <li>
                                            <svg><use xlink:href="#redo"></use></svg>
                                        </li>
                                        <li class="spacer">
                                        <svg><use xlink:href="#vert-line"></use></svg>
                                    </li>
                                    <li>
                                    <svg><use xlink:href="#cut"></use></svg>
                                </li>
                                <li>
                                <svg><use xlink:href="#copy"></use></svg>
                            </li>
                            <li>
                            <svg><use xlink:href="#paste"></use></svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </li>
    <li class="button-preview">
        <button class="button-standard-gray">Preview</button>
    </li>
</ul>
</div>

<div class="artboard-container">
<div class="media-tools">
    <ul>
        <li class="">
            <svg>
                <use xlink:href="#settings"></use>
            </svg>
        </li>
        <li class="">
            <svg>
                <use xlink:href="#metadata"></use>
            </svg>
        </li>
    </ul>
</div>
<div class="artboard">
  <div id="widget">
    <widgetheader></widgetheader>
    <widgetcontent></widgetcontent>
    <widgetfooter></widgetfooter>
  </div>
</div>
</div>
</div>
<!-- Panels -->
<div class="panel">
<!-- Panel Settings Template-->
<div class="panel-settings">
<div class="panel-content">
    <div class="panel-header">Settings</div>
    <ul>
        <li class="kds-mb-24">
            <button class="button-standard-gray">Batch Upload</button>
        </li>
        <li class="kds-mb-32">
            <div class="checkbox">
                <!-- Checkbox Component -->
                <input type="checkbox" id="checkbox"/>
                <label for="checkbox">Checkbox</label>
            </div>
        </li>
        <li class="kds-mb-32">
            <!-- Radio Button Vertical Component -->
            <div class="radio-buttons-vertical">
                <div class="radio-button-header">Header</div>
                <ul>
                    <li>
                        <input type="radio" value="On" checked>
                        <label>On</label>
                    </li>
                    <li>
                        <input type="radio" value="Off">
                        <label>Off</label>
                    </li>
                </ul>
            </div>
        </li>
        <li class="kds-mb-32">
            <!-- Radio Button Response Component -->
            <div class="radio-buttons-response">
                <div class="radio-button-header">Response Type</div>
                <ul>
                    <li>
                        <div class="radio-container">
                            <input type="radio" value="On" checked>
                            <label>On</label>
                            <div class="input-number-container u-hidden">
                                <div class="input-number-max">
                                    <label for="">Max attempts</label>
                                    <input type="number" min="1" max="9" value="3">
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="radio-container">
                            <input type="radio" value="Off">
                            <label>Off</label>
                            <div class="input-number-container u-hidden">
                                <div class="input-number-max">
                                    <label for="">Max attempts</label>
                                    <input type="number" min="1" max="9" value="3">
                                </div>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
        <li class="kds-mb-16">
            <!-- Radio Button Vertical Component -->
            <div class="radio-buttons-vertical">
                <div class="radio-button-header">Header</div>
                <ul>
                    <li>
                        <input type="radio" value="On" checked>
                        <label>On</label>
                    </li>
                    <li>
                        <input type="radio" value="Off">
                        <label>Off</label>
                    </li>
                </ul>
            </div>
        </li>
        <li class="kds-mb-32">
            <div class="checkbox">
                <!-- Checkbox Component -->
                <input type="checkbox" id="checkbox"/>
                <label for="checkbox">Checkbox</label>
            </div>
        </li>
        <li class="kds-mb-32">
            <!-- Radio Button Vertical Component -->
            <div class="radio-buttons-vertical">
                <div class="radio-button-header">Header</div>
                <ul>
                    <li>
                        <input type="radio" value="On" checked>
                        <label>On</label>
                    </li>
                    <li>
                        <input type="radio" value="Off">
                        <label>Off</label>
                    </li>
                </ul>
            </div>
        </li>
        <li class="kds-mb-32">
            <div class="input-number">
                <label for="">Width</label>
                <input type="number" min="-9999" max="9999" maxlength="4" value="249">
            </div>

        </li>
        <li class="kds-mb-32">
            <div class="checkbox">
                <!-- Checkbox Component -->
                <input type="checkbox" id="checkbox"/>
                <label for="checkbox">Checkbox</label>
            </div>
        </li>
    </ul>
</div>
</div>

<div class="panel-themes">
<!-- Panel Template -->
<div class="panel-content">
    <div class="panel-header">Themes</div>
    <div class="modern-container">
        <div class="dropdown dropdown-input">
            <div class="dropdown-button">
                <div class="input-text">
                    <label class="u-hidden" for="txt-input">Language</label>
                    <input type="text" name="" class="txt-input" placeholder="Language" value=""/>
                </div>
                <div class="icon-arrow">
                    <svg>
                        <use xlink:href="#arrow-down"></use>
                    </svg>
                </div>
            </div>
            <ul class="dropdown-content u-hide">
                <li>Dropdown Item</li>
                <li>Dropdown Item</li>
                <li>Dropdown Item</li>
            </ul>
        </div>
    </div>
    <div class="academic-container">
        <div class="dropdown dropdown-input">
            <div class="dropdown-button">
                <div class="input-text">
                    <label class="u-hidden" for="txt-input">Language</label>
                    <input type="text" name="" class="txt-input" placeholder="Language" value=""/>
                </div>
                <div class="icon-arrow">
                    <svg>
                        <use xlink:href="#arrow-down"></use>
                    </svg>
                </div>
            </div>
            <ul class="dropdown-content u-hide">
                <li>Dropdown Item</li>
                <li>Dropdown Item</li>
                <li>Dropdown Item</li>
            </ul>
        </div>
    </div>
    <div class="playful-container">
        <div class="dropdown dropdown-input">
            <div class="dropdown-button">
                <div class="input-text">
                    <label class="u-hidden" for="txt-input">Language</label>
                    <input type="text" name="" class="txt-input" placeholder="Language" value=""/>
                </div>
                <div class="icon-arrow">
                    <svg>
                        <use xlink:href="#arrow-down"></use>
                    </svg>
                </div>
            </div>
            <ul class="dropdown-content u-hide">
                <li>Dropdown Item</li>
                <li>Dropdown Item</li>
                <li>Dropdown Item</li>
            </ul>
        </div>
    </div>
</div>
</div>
<!-- Panel Accessibility Template-->
<div class="panel-accessibility">
<div class="panel-content">
    <div class="panel-header">Accessibility</div>
    <!-- alt text for screen readers -->
    <div class="alt-text-readers-container accordian">
        <div class="accordian__btn border-top">
            <svg>
                <use xlink:href="#arrow-right"></use>
            </svg>
            <div class="accordian__title">Alt Text Screen Readers</div>
        </div>
        <div class="accordian__container panel-closed">
            <ul class="accordian__content">
                <li class="kds-mb-32">
                    <!-- Widget Short Description -->
                    <div class="input-text">
                        <label class="u-hidden" for="txt-input">Widget Short Description</label>
                        <input type="text" name="" class="txt-input" placeholder="Widget Short Description" value=""/>
                    </div>
                </li>
                <li>
                    <!-- Widget Long Description -->
                    <div class="textarea-line-container">
                        <label class="u-hidden" for="txtarea-line">Widget Long Description</label>
                        <textarea type="text" class="textarea-line" rows='1' placeholder="Widget Long Description"></textarea>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- alt text for assets -->
    <div class="alt-text-assets-container accordian">
        <div class="accordian__btn">
            <svg>
                <use xlink:href="#arrow-right"></use>
            </svg>
            <div class="accordian__title">Alt Text Assets</div>
        </div>
        <div class="accordian__container panel-closed">
            <ul class="accordian__content">
                <li class="kds-mb-40">
                    <div class="image-text-input">
                        <div class="image-lockup">
                            <div class="image-file-name">filename.jpg</div>
                            <img src="https://unsplash.it/300/200" alt="">
                            <div class="input-text">
                                <label class="u-hidden" for="txt-input">Alt Text</label>
                                <input type="text" name="" class="txt-input" placeholder="Alt Text" value=""/>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="kds-mb-40">
                    <div class="image-text-input">
                        <div class="image-lockup">
                            <div class="image-file-name">filename.jpg</div>
                            <img src="https://unsplash.it/300/200" alt="">
                            <div class="input-text">
                                <label class="u-hidden" for="txt-input">Alt Text</label>
                                <input type="text" name="" class="txt-input" placeholder="Alt Text" value=""/>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="kds-mb-32">
                    <div class="image-text-input">
                        <div class="image-lockup">
                            <div class="image-file-name">filename.jpg</div>
                            <img src="https://unsplash.it/300/200" alt="">
                            <div class="input-text">
                                <label class="u-hidden" for="txt-input">Alt Text</label>
                                <input type="text" name="" class="txt-input" placeholder="Alt Text" value=""/>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>
<div class="panel-metadata">
<!-- Panel Template -->
<div class="panel-content">
    <div class="panel-header">Metadata</div>
    <div class="description-container accordian">
        <div class="border-top accordian__btn">
            <svg>
                <use xlink:href="#arrow-right"></use>
            </svg>
            <div class="accordian__title">Description</div>
        </div>
        <div class="accordian__container panel-closed">
            <ul class="accordian__content">
                <li class="kds-mb-16">
                    <!-- Subject -->
                    <div class="input-text">
                        <label class="u-hidden" for="txt-input">Subject</label>
                        <input type="text" name="" class="txt-input" placeholder="Subject" value=""/>
                    </div>
                </li>
                <li class="kds-mb-16">
                    <!-- Description -->
                    <div class="textarea-line-container">
                        <label class="u-hidden" for="txtarea-line">Description</label>
                        <textarea type="text" class="textarea-line" rows='1' placeholder="Description"></textarea>
                    </div>
                </li>
                <li class="kds-mb-16">
                    <!-- Publisher -->
                    <div class="input-text">
                        <label class="u-hidden" for="txt-input">Publisher</label>
                        <input type="text" name="" class="txt-input" placeholder="Publisher" value=""/>
                    </div>
                </li>
                <li>
                    <!-- Contributor -->
                    <div class="input-text">
                        <label class="u-hidden" for="txt-input">Contributor</label>
                        <input type="text" name="" class="txt-input" placeholder="Contributor" value=""/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="rights-sources-container accordian">
        <div class="btn-container accordian__btn">
            <svg>
                <use xlink:href="#arrow-right"></use>
            </svg>
            <div class="accordian__title">Rights & Sources</div>
        </div>
        <div class="accordian__container panel-closed">
            <ul class="accordian__content">
                <li class="kds-mb-16">
                    <!-- Identifier -->
                    <div class="input-text">
                        <label class="u-hidden" for="txt-input">Identifier</label>
                        <input type="text" name="" class="txt-input" placeholder="Identifier" value=""/>
                    </div>
                </li>
                <li class="kds-mb-16">
                    <!-- Sources -->
                    <div class="textarea-line-container">
                        <label class="u-hidden" for="txtarea-line">Source</label>
                        <textarea type="text" class="textarea-line" rows='1' placeholder="Source"></textarea>
                    </div>
                </li>
                <!-- Language Dropdown -->
                <li class="kds-mb-16">
                    <div class="dropdown dropdown-input">
                        <div class="dropdown-button">
                            <div class="input-text">
                                <label class="u-hidden" for="txt-input">Language</label>
                                <input type="text" name="" class="txt-input" placeholder="Language" value=""/>
                            </div>
                            <div class="icon-arrow">
                                <svg>
                                    <use xlink:href="#arrow-down"></use>
                                </svg>
                            </div>
                        </div>
                        <ul class="dropdown-content u-hide">
                            <li>Dropdown Item</li>
                            <li>Dropdown Item</li>
                            <li>Dropdown Item</li>
                        </ul>
                    </div>
                </li>
                <li class="kds-mb-16">
                    <!-- Coverage -->
                    <div class="input-text">
                        <label class="u-hidden" for="txt-input">Coverage</label>
                        <input type="text" name="" class="txt-input" placeholder="Coverage" value=""/>
                    </div>
                </li>
                <li>
                    <!-- Rights -->
                    <div class="input-text">
                        <label class="u-hidden" for="txt-input">Rights</label>
                        <input type="text" name="" class="txt-input" placeholder="Rights" value=""/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="interactive-profile-container accordian">
        <div class="btn-container accordian__btn">
            <svg>
                <use xlink:href="#arrow-right"></use>
            </svg>
            <div class="accordian__title">Interactive Profile</div>
        </div>
        <div class="accordian__container panel-closed">
            <ul class="accordian__content">
                <li class="kds-mb-16">
                    <!-- Genre -->
                    <div class="input-text">
                        <label class="u-hidden" for="txt-input">Genre</label>
                        <input type="text" name="" class="txt-input" placeholder="Genre" value=""/>
                    </div>
                </li>
            </li>
            <li class="kds-mb-16">
                <!-- Alignment -->
                <div class="input-text">
                    <label class="u-hidden" for="txt-input">Alignment</label>
                    <input type="text" name="" class="txt-input" placeholder="Alignment" value=""/>
                </div>
            </li>
            <li class="mb-24">
                <!-- End User -->
                <div class="input-text">
                    <label class="u-hidden" for="txt-input">End User</label>
                    <input type="text" name="" class="txt-input" placeholder="End User" value=""/>
                </div>
            </li>
            <li class="mb-24">
                <!-- Time Required -->
                <div class="input-time-range">
                    <label for="">Time Required</label>
                    <ul class="time-inputs">
                        <li>
                            <div class="input-number">
                                <label for="">minutes:</label>
                                <input type="number" min="-9999" max="9999" maxlength="4" value="249">
                            </div>

                        </li>
                        <li>
                            <div class="input-number">
                                <label for="">seconds:</label>
                                <input type="number" min="-9999" max="9999" maxlength="4" value="249">
                            </div>

                        </li>
                    </ul>
                </div>
            </li>
            <li class="kds-mb-16">
                <!-- Age -->
                <div class="input-age-range">
                    <label for="">Age Range</label>
                    <ul class="age-inputs">
                        <li>
                            <div class="input-number">
                                <label for="">From:</label>
                                <input type="number" min="-9999" max="9999" maxlength="4" value="249">
                            </div>
                        </li>
                        <li>
                            <div class="input-number">
                                <label for="">To:</label>
                                <input type="number" min="-9999" max="9999" maxlength="4" value="249">
                            </div>

                        </li>
                    </ul>
                </div>
            </li>
            <li class="kds-mb-16">
                <!-- Interactive Type -->
                <div class="input-text">
                    <label class="u-hidden" for="txt-input">Interactive Type</label>
                    <input type="text" name="" class="txt-input" placeholder="Interactive Type" value=""/>
                </div>
            </li>
            <li class="">
                <!-- Resource Type -->
                <div class="input-text">
                    <label class="u-hidden" for="txt-input">Learning Resource Type</label>
                    <input type="text" name="" class="txt-input" placeholder="Learning Resource Type" value=""/>
                </div>
            </li>
        </ul>
    </div>
</div>
</div>
</div>

</div>
<!-- Sidebar -->
<div class="sidebar">
<ul>
<li class="btn-settings">
<svg>
    <use xlink:href="#settings"></use>
</svg>
<div class="indicator indicator--right u-hide"></div>
</li>
<li class="btn-metadata">
<svg>
    <use xlink:href="#metadata"></use>
</svg>
<div class="indicator indicator--right u-hide"></div>
</li>
<li class="btn-accessibility">
<svg>
    <use xlink:href="#accessibility"></use>
</svg>
<div class="indicator indicator--right u-hide"></div>
</li>
<li class="btn-comments">
<svg>
    <use xlink:href="#comments"></use>
</svg>
<div class="indicator indicator--right u-hide"></div>
</li>
</ul>
<ul>
<li class="btn-user-guide">
<svg>
    <use xlink:href="#help-info"></use>
</svg>
<div class="indicator indicator--right u-hide"></div>
</li>
</ul>
</div>
</div>
<!-- Footer -->
<footer class="footer">Footer - FPO</footer>
</div>

</template>


<script>
import Widgetheader from './Widgetheader'
import Widgetfooter from './Widgetfooter'
import Widgetcontent from './Widgetcontent'
export default {
  name: 'hotpsot',
  components: {
    Widgetheader,
    Widgetfooter,
    Widgetcontent
  }
}
</script>

