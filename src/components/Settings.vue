<template>
    <div class="panel-content">
        <pre>
            {{$data | json}}
        </pre>
        <div class="panel-header">{{ panelTitle }}</div>
        <ul>
            <li class="kds-mb-24">
                <button class="button-standard-gray">Batch Upload</button>
            </li>
            <li class="kds-mb-32">
                <div class="checkbox">
                    <!-- Checkbox Component -->
                    <input type="checkbox" id="876">
                    <label for="876">Checkbox</label>
                </div>
            </li>
            <li class="kds-mb-32">
                <!-- Radio Button Vertical Component -->
                <div class="radio-buttons-vertical">
                    <div class="radio-button-header">Header</div>
                    <ul>
                        <li>
                            <input type="radio" value="On" checked="" name=".1oe0n" id="47">
                            <label for="47">On</label>
                        </li>
                        <li>
                            <input type="radio" value="Off" name=".1oe0n" id="993">
                            <label for="993">Off</label>
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
                                <input type="radio" value="On" checked="" name=".v1m3s" id="427">
                                <label for="427">On</label>
                                <div class="input-number-container u-hidden">
                                    <div class="input-number-max">
                                        <label for="">Max attempts</label>
                                        <input type="number" min="1" max="9" value="3" name=".v1m3s">
                                    </div>                
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="radio-container">
                                <input type="radio" value="Off" name=".v1m3s" id="201">
                                <label for="201">Off</label>
                                <div class="input-number-container u-hidden">
                                    <div class="input-number-max">
                                        <label for="">Max attempts</label>
                                        <input type="number" min="1" max="9" value="3" name=".v1m3s">
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
                            <input type="radio" value="On" checked="" name=".dbpzd" id="107">
                            <label for="107">On</label>
                        </li>
                        <li>
                            <input type="radio" value="Off" name=".dbpzd" id="612">
                            <label for="612">Off</label>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="kds-mb-32">
                <div class="checkbox">
                    <!-- Checkbox Component -->
                    <input type="checkbox" id="685">
                    <label for="685">Checkbox</label>
                </div>
            </li>
            <li class="kds-mb-32">
                <!-- Radio Button Vertical Component -->
                <div class="radio-buttons-vertical">
                    <div class="radio-button-header">Header</div>
                    <ul>
                        <li>
                            <input type="radio" value="On" checked="" name=".zja7o" id="538">
                            <label for="538">On</label>
                        </li>
                        <li>
                            <input type="radio" value="Off" name=".zja7o" id="788">
                            <label for="788">Off</label>
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
                    <input type="checkbox" id="413">
                    <label for="413">Checkbox</label>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'settings',
    data () {
        return {
            panelTitle: 'Settings'
        }
    },
    props: {
        item: Object,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
