<template>
    <div id="statistic-1" class="py-100 statistic-section division">
      <div class="container">
        <!-- STATISTIC-1 WRAPPER -->
        <div class="statistic-1-wrapper">
          <div class="row justify-content-md-center row-cols-1 row-cols-md-3">
            <!-- STATISTIC BLOCK #1 -->
            <div class="col">
              <div id="sb-1-1" class="animate__animated animate__fadeInUp">
                <div class="statistic-block">
                  <!-- Digit -->
                  <div class="statistic-block-digit text-center">
                    <h2 class="s-46 statistic-number">
                      <span class="count-element d-flex"
                        ><ElementsCounterUp
                          :start="0"
                          :end="10"
                          :duration="2000" /></span
                      >+
                    </h2>
                  </div>
                  <!-- Text -->
                  <div class="statistic-block-txt color--grey">
                    <p class="p-md">Workshops Conducted</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- END STATISTIC BLOCK #1 -->
            <!-- STATISTIC BLOCK #2 -->
            <div class="col">
              <div id="sb-1-2" class="animate__animated animate__fadeInUp">
                <div class="statistic-block">
                  <!-- Digit -->
                  <div class="statistic-block-digit text-center">
                    <h2 class="s-46 statistic-number">
                      <span class="count-element d-flex"
                        ><ElementsCounterUp
                          :start="0"
                          :end="120"
                          :duration="2000" /></span
                      >+
                    </h2>
                  </div>
                  <!-- Text -->
                  <div class="statistic-block-txt color--grey">
                    <p class="p-md">Participants Engaged</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- END STATISTIC BLOCK #2 -->
            <!-- STATISTIC BLOCK #3 -->
            <div class="col">
              <div id="sb-1-3" class="animate__animated animate__fadeInUp">
                <div class="statistic-block">
                  <!-- Digit -->
                  <div class="statistic-block-digit text-center">
                    <h2 class="s-46 statistic-number">
                      <span class="count-element d-flex"
                        ><ElementsCounterUp
                          :start="0"
                          :end="12"
                          :duration="2000" /></span
                      >+
                    </h2>
                  </div>
                  <!-- Text -->
                  <div class="statistic-block-txt color--grey">
                    <p class="p-md">Active Partner Organizations</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- END STATISTIC BLOCK #3 -->
          </div>
          <!-- End row -->
        </div>
        <!-- END STATISTIC-1 WRAPPER -->
      </div>
      <!-- End container -->
    </div>
    <!-- END STATISTIC-1 -->
    <!-- DIVIDER LINE -->
    <hr class="divider" />
  </template>
